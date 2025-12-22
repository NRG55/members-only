-- RESET TABLES

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS messages;

-- CREATE USERS

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    first_name VARCHAR (32),
    last_name VARCHAR (32),
    username VARCHAR (32),
    password VARCHAR (64),
    is_member BOOLEAN DEFAULT false,
    is_admin BOOLEAN DEFAULT false    
);

-- CREATE MESSAGES

CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,     
    user_id INTEGER NOT NULL,
    title VARCHAR (100),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP         
);

-- INSERT USERS

INSERT INTO users (first_name, last_name, username, password) VALUES 
    ('Saige', 'Fuentes', 'saige', '@#$&!'),
    ('Bowen', 'Higgins', 'bowen', '@#$&!'),
    ('Leighton', 'Kramer', 'leighton', '@#$&!'),
    ('Kylan', 'Gentry', 'kylan', '@#$&!'),
    ('Amelie', 'Griffith', 'amelie', '@#$&!'),
    ('Franklin', 'Sierra', 'franklin', '@#$&!');

-- INSERT MESSAGES

INSERT INTO messages (user_id, title, message) VALUES 
    (1, 'Coffee Tomorrow?', 'I''ll be in your area tomorrow morning. Let me know if you have 15 minutes to grab a quick coffee!!'),
    (2, 'Project Update', 'Just a heads-up that the first draft is complete. I''ll send the link over for your review by EOD.'),
    (3, 'Quick Reminder', 'Don''t forget that the community meeting starts at 6:00 PM tonight. Hope to see you there!'),
    (4, 'Great Work!', 'I just saw the results from your latest presentation. Fantastic job—the whole team is impressed!'),
    (5, 'Running Late', 'Stuck in unexpected traffic, so I''ll be about 10 minutes late. Sorry for the delay, see you soon!'),
    (6, 'Weekend Plans', 'Are we still on for the hike this Saturday? Weather looks perfect, so let me know if you''re still in.');