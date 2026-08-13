-- Clear existing data
TRUNCATE TABLE members, categories CASCADE;

-- Insert Categories
INSERT INTO categories (id, name, slug, display_order, is_active) VALUES
('b3a45c21-f033-4f9e-a86d-1981e4b029a1', 'Executive Committee', 'executive-committee', 1, true),
('d2c67b93-e1a5-4876-b391-450f3b468512', 'Board of Directors', 'board-of-directors', 2, true),
('a1f94d82-c2e6-43b9-a728-6831d0a5e954', 'Directors / Coordinators', 'directors-coordinators', 3, true),
('e5b83f14-a931-4c62-8157-2c90f5761a29', 'General Members', 'general-members', 4, true);

-- Insert Members (Executive Committee)
INSERT INTO members (
    first_name, last_name, slug, category_id, designation, date_of_birth,
    phone, email, show_phone, show_email, is_active, display_order, profile_photo_url, biography, profession
) VALUES
(
    'Sunil', 'Perera', 'sunil-perera', 'b3a45c21-f033-4f9e-a86d-1981e4b029a1', 'President', '1975-04-12',
    '+94 77 123 4567', 'sunil.p@example.com', true, true, true, 1,
    'https://api.dicebear.com/9.x/initials/svg?seed=Sunil+Perera',
    'Dedicated leader with 10 years in the club.', 'Entrepreneur'
),
(
    'Nimal', 'Fernando', 'nimal-fernando', 'b3a45c21-f033-4f9e-a86d-1981e4b029a1', 'Secretary', '1980-08-13',
    '+94 71 987 6543', 'nimal.f@example.com', true, true, true, 2,
    'https://api.dicebear.com/9.x/initials/svg?seed=Nimal+Fernando',
    'Ensuring smooth operations and communication.', 'Lawyer'
),
(
    'Kamal', 'De Silva', 'kamal-de-silva', 'b3a45c21-f033-4f9e-a86d-1981e4b029a1', 'Treasurer', '1985-11-20',
    '+94 77 555 1234', 'kamal.d@example.com', true, true, true, 3,
    'https://api.dicebear.com/9.x/initials/svg?seed=Kamal+De+Silva',
    'Managing club finances with integrity.', 'Accountant'
),
(
    'Saman', 'Kumara', 'saman-kumara', 'b3a45c21-f033-4f9e-a86d-1981e4b029a1', 'Vice President', '1978-02-28',
    '+94 70 111 2222', 'saman.k@example.com', true, true, true, 4,
    'https://api.dicebear.com/9.x/initials/svg?seed=Saman+Kumara',
    'Supporting the President in all activities.', 'Doctor'
);

-- Insert Members (Board of Directors)
INSERT INTO members (
    first_name, last_name, slug, category_id, designation, date_of_birth,
    phone, email, show_phone, show_email, is_active, display_order, profile_photo_url, biography, profession
) VALUES
(
    'Roshan', 'Mendis', 'roshan-mendis', 'd2c67b93-e1a5-4876-b391-450f3b468512', 'Director', '1982-05-15',
    '+94 77 333 4444', 'roshan.m@example.com', false, false, true, 1,
    'https://api.dicebear.com/9.x/initials/svg?seed=Roshan+Mendis',
    'Overseeing community service projects.', 'Engineer'
),
(
    'Nuwan', 'Gunawardena', 'nuwan-gunawardena', 'd2c67b93-e1a5-4876-b391-450f3b468512', 'Director', '1995-08-13',
    '+94 71 444 5555', 'nuwan.g@example.com', false, false, true, 2,
    'https://api.dicebear.com/9.x/initials/svg?seed=Nuwan+Gunawardena',
    'Focusing on youth development programs.', 'Software Engineer'
),
(
    'Tharindu', 'Senanayake', 'tharindu-senanayake', 'd2c67b93-e1a5-4876-b391-450f3b468512', 'Director', '1990-08-14',
    '+94 70 666 7777', 'tharindu.s@example.com', false, false, true, 3,
    'https://api.dicebear.com/9.x/initials/svg?seed=Tharindu+Senanayake',
    'Managing public relations and marketing.', 'Marketing Manager'
),
(
    'Kasun', 'Bandara', 'kasun-bandara', 'd2c67b93-e1a5-4876-b391-450f3b468512', 'Director', '1988-12-01',
    '+94 77 888 9999', 'kasun.b@example.com', false, false, true, 4,
    'https://api.dicebear.com/9.x/initials/svg?seed=Kasun+Bandara',
    'Leading membership growth initiatives.', 'Business Analyst'
);

-- Insert Members (Directors / Coordinators)
INSERT INTO members (
    first_name, last_name, slug, category_id, designation, date_of_birth,
    phone, email, show_phone, show_email, is_active, display_order, profile_photo_url, biography, profession
) VALUES
(
    'Asanka', 'Rajapakse', 'asanka-rajapakse', 'a1f94d82-c2e6-43b9-a728-6831d0a5e954', 'Coordinator', '1985-08-16',
    '+94 71 222 3333', 'asanka.r@example.com', false, false, true, 1,
    'https://api.dicebear.com/9.x/initials/svg?seed=Asanka+Rajapakse',
    'Coordinating blood donation camps.', 'Teacher'
),
(
    'Dinesh', 'Herath', 'dinesh-herath', 'a1f94d82-c2e6-43b9-a728-6831d0a5e954', 'Coordinator', '1992-08-20',
    '+94 70 444 6666', 'dinesh.h@example.com', false, false, true, 2,
    'https://api.dicebear.com/9.x/initials/svg?seed=Dinesh+Herath',
    'Organizing fundraising events.', 'Event Manager'
),
(
    'Mahesh', 'Wijetunga', 'mahesh-wijetunga', 'a1f94d82-c2e6-43b9-a728-6831d0a5e954', 'Coordinator', '1981-01-10',
    '+94 77 999 1111', 'mahesh.w@example.com', false, false, true, 3,
    'https://api.dicebear.com/9.x/initials/svg?seed=Mahesh+Wijetunga',
    'Managing environmental projects.', 'Architect'
),
(
    'Chaminda', 'Liyanage', 'chaminda-liyanage', 'a1f94d82-c2e6-43b9-a728-6831d0a5e954', 'Coordinator', '1979-09-25',
    '+94 71 777 8888', 'chaminda.l@example.com', false, false, true, 4,
    'https://api.dicebear.com/9.x/initials/svg?seed=Chaminda+Liyanage',
    'Leading eye care camps.', 'Optometrist'
);

-- Insert Members (General Members)
INSERT INTO members (
    first_name, last_name, slug, category_id, designation, date_of_birth,
    phone, email, show_phone, show_email, is_active, display_order, profile_photo_url, biography, profession
) VALUES
(
    'Pradeep', 'Jayawardena', 'pradeep-jayawardena', 'e5b83f14-a931-4c62-8157-2c90f5761a29', 'Member', '1987-03-18',
    '+94 77 121 2121', 'pradeep.j@example.com', false, false, true, 1,
    'https://api.dicebear.com/9.x/initials/svg?seed=Pradeep+Jayawardena',
    'Active participant in all club activities.', 'Banker'
),
(
    'Gayan', 'Athauda', 'gayan-athauda', 'e5b83f14-a931-4c62-8157-2c90f5761a29', 'Member', '1993-07-05',
    '+94 71 343 4343', 'gayan.a@example.com', false, false, true, 2,
    'https://api.dicebear.com/9.x/initials/svg?seed=Gayan+Athauda',
    'Enthusiastic new member.', 'Graphic Designer'
),
(
    'Hasitha', 'Dissanayake', 'hasitha-dissanayake', 'e5b83f14-a931-4c62-8157-2c90f5761a29', 'Member', '1984-10-30',
    '+94 70 565 6565', 'hasitha.d@example.com', false, false, true, 3,
    'https://api.dicebear.com/9.x/initials/svg?seed=Hasitha+Dissanayake',
    'Supporting the IT infrastructure of the club.', 'IT Consultant'
),
(
    'Indika', 'Weerasinghe', 'indika-weerasinghe', 'e5b83f14-a931-4c62-8157-2c90f5761a29', 'Member', '1989-06-22',
    '+94 77 787 8787', 'indika.w@example.com', false, false, true, 4,
    'https://api.dicebear.com/9.x/initials/svg?seed=Indika+Weerasinghe',
    'Dedicated to serving the community.', 'Pharmacist'
);
