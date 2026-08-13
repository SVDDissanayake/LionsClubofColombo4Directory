-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    slug TEXT UNIQUE NOT NULL,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create members table
CREATE TABLE IF NOT EXISTS members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    full_name TEXT GENERATED ALWAYS AS (first_name || ' ' || last_name) STORED,
    slug TEXT UNIQUE NOT NULL,
    profile_photo_url TEXT,
    designation TEXT,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    date_of_birth DATE,
    phone TEXT,
    whatsapp TEXT,
    email TEXT,
    address TEXT,
    profession TEXT,
    joined_date DATE,
    membership_id TEXT,
    biography TEXT,
    linkedin_url TEXT,
    facebook_url TEXT,
    instagram_url TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    show_phone BOOLEAN DEFAULT false,
    show_email BOOLEAN DEFAULT false,
    show_address BOOLEAN DEFAULT false,
    show_whatsapp BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_members_slug ON members(slug);
CREATE INDEX IF NOT EXISTS idx_members_category_order ON members(category_id, display_order);
CREATE INDEX IF NOT EXISTS idx_members_is_active ON members(is_active);
CREATE INDEX IF NOT EXISTS idx_members_date_of_birth ON members(date_of_birth);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_categories_display_order ON categories(display_order);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers to tables
CREATE TRIGGER update_categories_updated_at
    BEFORE UPDATE ON categories
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_members_updated_at
    BEFORE UPDATE ON members
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create public_members view
CREATE OR REPLACE VIEW public_members AS
SELECT
    id,
    first_name,
    last_name,
    full_name,
    slug,
    profile_photo_url,
    designation,
    category_id,
    date_of_birth,
    CASE WHEN show_phone THEN phone ELSE NULL END AS phone,
    CASE WHEN show_whatsapp THEN whatsapp ELSE NULL END AS whatsapp,
    CASE WHEN show_email THEN email ELSE NULL END AS email,
    CASE WHEN show_address THEN address ELSE NULL END AS address,
    profession,
    joined_date,
    membership_id,
    biography,
    linkedin_url,
    facebook_url,
    instagram_url,
    display_order,
    is_active,
    created_at,
    updated_at
FROM members
WHERE is_active = true;
