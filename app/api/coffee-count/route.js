import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const GOOGLE_SHEET_WEBAPP_URL = process.env.GOOGLE_SHEET_WEBAPP_URL;

// In-memory fallback for serverless environments with read-only filesystem
let memoryCount = 42;

const countFilePath = path.join(process.cwd(), "data", "coffee-count.json");

function ensureFile() {
  try {
    const dir = path.dirname(countFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(countFilePath)) {
      fs.writeFileSync(countFilePath, JSON.stringify({ count: 42 }), "utf8");
    }
    return true;
  } catch (e) {
    // Read-only filesystem on Vercel
    return false;
  }
}

async function sheetGet() {
  if (!GOOGLE_SHEET_WEBAPP_URL) return null;
  try {
    const res = await fetch(GOOGLE_SHEET_WEBAPP_URL, {
      method: "GET",
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    const num = Number(data.count);
    return Number.isFinite(num) ? num : null;
  } catch {
    return null;
  }
}

async function sheetPost() {
  if (!GOOGLE_SHEET_WEBAPP_URL) return null;
  try {
    const res = await fetch(GOOGLE_SHEET_WEBAPP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "increment" }),
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    const num = Number(data.count);
    return Number.isFinite(num) ? num : null;
  } catch {
    return null;
  }
}

export async function GET() {
  if (GOOGLE_SHEET_WEBAPP_URL) {
    const sheetCount = await sheetGet();
    if (sheetCount !== null) return NextResponse.json({ count: sheetCount });
  }

  const fileOk = ensureFile();
  if (fileOk) {
    try {
      const raw = fs.readFileSync(countFilePath, "utf8");
      const data = JSON.parse(raw);
      return NextResponse.json({ count: data.count ?? memoryCount });
    } catch {
      return NextResponse.json({ count: memoryCount });
    }
  }

  return NextResponse.json({ count: memoryCount });
}

export async function POST() {
  if (GOOGLE_SHEET_WEBAPP_URL) {
    const newCount = await sheetPost();
    if (newCount !== null) {
      return NextResponse.json({ count: newCount });
    }
  }

  memoryCount += 1;
  const fileOk = ensureFile();
  if (fileOk) {
    try {
      fs.writeFileSync(
        countFilePath,
        JSON.stringify({ count: memoryCount }),
        "utf8"
      );
    } catch {
      // Ignored if read-only
    }
  }

  return NextResponse.json({ count: memoryCount });
}
