-- Create bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'member-photos',
    'member-photos',
    true,
    5242880, -- 5MB in bytes
    ARRAY['image/jpeg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO UPDATE SET
    public = EXCLUDED.public,
    file_size_limit = EXCLUDED.file_size_limit,
    allowed_mime_types = EXCLUDED.allowed_mime_types;

-- Storage RLS Policies

-- Public read access
CREATE POLICY "Public Read Access" ON storage.objects
    FOR SELECT
    USING (bucket_id = 'member-photos');

-- Admin write access
CREATE POLICY "Admin Write Access" ON storage.objects
    FOR ALL
    USING (
        bucket_id = 'member-photos' AND
        (auth.jwt() -> 'app_metadata' ->> 'is_admin' = 'true')
    )
    WITH CHECK (
        bucket_id = 'member-photos' AND
        (auth.jwt() -> 'app_metadata' ->> 'is_admin' = 'true')
    );
