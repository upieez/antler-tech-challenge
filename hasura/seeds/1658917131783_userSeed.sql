SET check_function_bodies = false;
INSERT INTO public.user (name, email, password, onboarded, program_id, cohort_id, location_id ) 
VALUES 
('Liam Swift', 'liam.swift@antler.co', substr(md5(random()::text), 0, 25), false, 1, 1, 1 ), 
('Scott Waddle', 'scott.waddle@antler.co', substr(md5(random()::text), 0, 25), false, 1, 1, 1 ), 
('Jack McDonald', 'jack.mcdonald@antler.co', substr(md5(random()::text), 0, 25), false, 2, 2, 2 ), 
('Nic Touron', 'nic@antler.co', substr(md5(random()::text), 0, 25), false, 2, 2, 2 ), 
('Oly Lotfi', 'oly.lotfi@antler.co', substr(md5(random()::text), 0, 25), false, 2, 2, 2 ), 
('Daniel Henry', 'daniel.henry@antler.co', substr(md5(random()::text), 0, 25), false, 2, 2, 2 );

