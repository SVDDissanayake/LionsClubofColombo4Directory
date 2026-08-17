import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import xlsx from 'xlsx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MEMBERS_JSON_PATH = path.join(__dirname, '..', 'src', 'data', 'members.json');

// Check arguments
const excelFilePath = process.argv[2];
if (!excelFilePath) {
  console.error("Usage: npm run import-excel <path-to-excel-file>");
  process.exit(1);
}

const resolvedExcelPath = path.resolve(process.cwd(), excelFilePath);

if (!fs.existsSync(resolvedExcelPath)) {
  console.error(`File not found: ${resolvedExcelPath}`);
  process.exit(1);
}

try {
  console.log(`Reading ${resolvedExcelPath}...`);
  // Read Excel file
  const workbook = xlsx.readFile(resolvedExcelPath);
  const sheetName = workbook.SheetNames[0]; // Take the first sheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert to JSON
  // Expecting columns: first_name, last_name, designation, category_id, date_of_birth, phone, whatsapp, email, address, profession, joined_date, membership_id, biography, linkedin_url, facebook_url, instagram_url
  const rows = xlsx.utils.sheet_to_json(worksheet, { defval: null });

  console.log(`Found ${rows.length} rows. Formatting data...`);

  // Map to Member schema
  const newMembers = rows.map((row, index) => {
    // Generate slug from name
    const firstName = row.first_name || '';
    const lastName = row.last_name || '';
    const fullName = `${firstName} ${lastName}`.trim();
    const slug = fullName.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `member-${index}`;

    return {
      id: Date.now().toString() + index.toString(),
      first_name: firstName,
      last_name: lastName,
      full_name: fullName,
      slug: slug,
      profile_photo_url: row.profile_photo_url || null,
      designation: row.designation || null,
      category_id: row.category_id?.toString() || "2", // Default to General Members (id 2) if not specified
      date_of_birth: row.date_of_birth || null,
      phone: row.phone?.toString() || null,
      whatsapp: row.whatsapp?.toString() || null,
      email: row.email || null,
      address: row.address || null,
      profession: row.profession || null,
      joined_date: row.joined_date || null,
      membership_id: row.membership_id?.toString() || null,
      biography: row.biography || null,
      linkedin_url: row.linkedin_url || null,
      facebook_url: row.facebook_url || null,
      instagram_url: row.instagram_url || null,
      display_order: parseInt(row.display_order) || 999,
      is_active: row.is_active !== false, // default true
      show_phone: row.show_phone !== false,
      show_email: row.show_email !== false,
      show_address: row.show_address !== false,
      show_whatsapp: row.show_whatsapp !== false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  });

  // Write to members.json
  fs.writeFileSync(MEMBERS_JSON_PATH, JSON.stringify(newMembers, null, 2), 'utf-8');
  console.log(`Successfully wrote ${newMembers.length} members to src/data/members.json!`);
} catch (error) {
  console.error("Error processing Excel file:", error.message);
  process.exit(1);
}
