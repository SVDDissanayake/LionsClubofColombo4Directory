-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE members ENABLE ROW LEVEL SECURITY;

-- Categories Policies
-- Public SELECT
CREATE POLICY "Allow public read access on active categories" ON categories
    FOR SELECT
    USING (is_active = true);

-- Admin INSERT/UPDATE/DELETE
CREATE POLICY "Allow admin full access on categories" ON categories
    FOR ALL
    USING (auth.jwt() -> 'app_metadata' ->> 'is_admin' = 'true')
    WITH CHECK (auth.jwt() -> 'app_metadata' ->> 'is_admin' = 'true');

-- Members Policies
-- Public SELECT (Allow public to read active members, needed for view to work)
CREATE POLICY "Allow public read access on active members" ON members
    FOR SELECT
    USING (is_active = true);

-- Admin INSERT/UPDATE/DELETE
CREATE POLICY "Allow admin full access on members" ON members
    FOR ALL
    USING (auth.jwt() -> 'app_metadata' ->> 'is_admin' = 'true')
    WITH CHECK (auth.jwt() -> 'app_metadata' ->> 'is_admin' = 'true');
