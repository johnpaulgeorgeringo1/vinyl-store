import re
import pandas as pd
from docx import Document

# --- 1. Töltsd be a Word fájlt ---
doc = Document("2025-09-15.docx")  # ide írd be a fájl nevét

lines = []
for para in doc.paragraphs:
    text = para.text.strip()
    if text:
        lines.append(text)

records = []
current_band = None

# --- 2. Feldolgozás soronként ---
for line in lines:
    line = line.strip()
    if not line:
        continue

    # Új band (pl. ABBA: The Album ...)
    if ":" in line:
        band, rest = line.split(":", 1)
        current_band = band.strip()
        rest = rest.strip()
    else:
        rest = line

    # Album és a többi adat elválasztása
    parts = re.split(r"\s{2,}", rest, maxsplit=1)
    if len(parts) == 2:
        album, details = parts
    else:
        chunks = rest.split(" ", 1)
        album = chunks[0]
        details = chunks[1] if len(chunks) > 1 else ""

    record_company = None
    barcode = None
    release_date = None
    release_country = None
    quality = None
    price = None
    extra = None

    # Kiadó / kód / év
    m = re.search(r"([A-Za-z0-9\.\- ]+)\s+([0-9A-Za-z\.\-]+)/(\d{4})", details)
    if m:
        record_company = m.group(1).strip()
        barcode = m.group(2).strip()
        release_date = m.group(3)

    # Ország
    country_match = re.search(r",\s*([A-Z]{1,3})\s", details)
    if country_match:
        release_country = country_match.group(1)

    # Minőség (VG, NM, M/M, S/S)
    q_match = re.search(r"\s(VG\+?|NM|M/M|S/S)[\s,]", details)
    if q_match:
        quality = q_match.group(1)

    # Ár (mindig az utolsó szám+e mintát vesszük fő árnak)
    price_match = re.findall(r"(\d+(?:,\d+)?e)", line)
    if price_match:
        price = price_match[-1]
        if len(price_match) > 1:
            extra = "Több ár: " + ", ".join(price_match)

    # Megjegyzések
    if "lejátszatlan" in line.lower():
        extra = (extra + "; " if extra else "") + "lejátszatlan"
    if "bontatlan" in line.lower():
        extra = (extra + "; " if extra else "") + "bontatlan"

    records.append({
        "Band": current_band,
        "Album": album.strip(),
        "Record Company": record_company,
        "Barcode": barcode,
        "Release Date": release_date,
        "Release Country": release_country,
        "Quality": quality,
        "Price": price,
        "Extra": extra
    })

# --- 3. Mentés Excelbe ---
df = pd.DataFrame(records)
df.to_excel("vinyl_collection_full.xlsx", index=False)
print("Kész! Létrejött a vinyl_collection_full.xlsx fájl.")
