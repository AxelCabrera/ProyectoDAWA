-- Crear tablas
CREATE TABLE dawa.users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE dawa.profiles (
    profile_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES dawa.users(user_id) ON DELETE CASCADE,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    profile_picture VARCHAR(255),
    bio TEXT,
    academic_history TEXT,
    professional_history TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE dawa.posts (
    post_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES dawa.users(user_id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE dawa.comments (
    comment_id SERIAL PRIMARY KEY,
    post_id INT REFERENCES dawa.posts(post_id) ON DELETE CASCADE,
    user_id INT REFERENCES dawa.users(user_id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE dawa.groups (
    group_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    is_private BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE dawa.group_members (
    group_member_id SERIAL PRIMARY KEY,
    group_id INT REFERENCES dawa.groups(group_id) ON DELETE CASCADE,
    user_id INT REFERENCES dawa.users(user_id) ON DELETE CASCADE,
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE dawa.events (
    event_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES dawa.users(user_id) ON DELETE CASCADE,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    event_date TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE dawa.event_participants (
    event_participant_id SERIAL PRIMARY KEY,
    event_id INT REFERENCES dawa.events(event_id) ON DELETE CASCADE,
    user_id INT REFERENCES dawa.users(user_id) ON DELETE CASCADE,
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE dawa.messages (
    message_id SERIAL PRIMARY KEY,
    sender_id INT REFERENCES dawa.users(user_id) ON DELETE CASCADE,
    receiver_id INT REFERENCES dawa.users(user_id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE dawa.notifications (
    notification_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES dawa.users(user_id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear un usuario administrador
INSERT INTO dawa.users (username, email, password, is_admin) VALUES
('admin', 'admin@alumniug.com', 'admin123', TRUE);

-- Crear perfiles para el administrador
INSERT INTO dawa.profiles (user_id, first_name, last_name, bio) VALUES
((SELECT user_id FROM dawa.users WHERE username = 'admin'), 'Admin', 'User', 'Administrador del sistema');

-- Insertar usuarios
INSERT INTO dawa.users (username, email, password, is_admin) VALUES
('johndoe', 'johndoe93@gmail.com', 'johndoe123', FALSE),
('janedoe', 'janedoe95@gmail.com', 'janedoe456', FALSE),
('alice', 'alice98@gmail.com', 'alice123', FALSE);

-- Insertar perfiles
INSERT INTO dawa.profiles (user_id, first_name, last_name, bio, academic_history, professional_history) VALUES
((SELECT user_id FROM dawa.users WHERE username = 'johndoe'), 'John', 'Doe', 'Estudiante de ingeniería de Software', 'Universidad de Guayaquil', 'Practicante en TechCorp'),
((SELECT user_id FROM dawa.users WHERE username = 'janedoe'), 'Jane', 'Doe', 'Estudiante de administración de empresas', 'Universidad de Guayaquil', 'Asistente administrativa en Empresa Claro'),
((SELECT user_id FROM dawa.users WHERE username = 'alice'), 'Alice', 'Smith', 'Estudiante de diseño grafico', 'Universidad de Guayaquil', 'Diseñadora freelance');

-- Insertar publicaciones
INSERT INTO dawa.posts (user_id, content) VALUES
((SELECT user_id FROM dawa.users WHERE username = 'johndoe'), '¡Hola a todos! ¿Alguien sabe cuándo comienzan las inscripciones para el próximo semestre?'),
((SELECT user_id FROM dawa.users WHERE username = 'janedoe'), 'Estoy organizando un grupo de estudio para la próxima semana. ¡Quien quiera unirse es bienvenido!'),
((SELECT user_id FROM dawa.users WHERE username = 'alice'), 'Acabo de terminar mi último proyecto de diseño. ¡Estoy muy emocionada de compartirlo con ustedes!');

-- Insertar comentarios
INSERT INTO dawa.comments (post_id, user_id, content) VALUES
((SELECT post_id FROM dawa.posts WHERE content LIKE '%inscripciones%'), (SELECT user_id FROM dawa.users WHERE username = 'janedoe'), 'Creo que las inscripciones comienzan la próxima semana.'),
((SELECT post_id FROM dawa.posts WHERE content LIKE '%grupo de estudio%'), (SELECT user_id FROM dawa.users WHERE username = 'alice'), 'Me encantaría unirme. ¿Cuándo y dónde?'),
((SELECT post_id FROM dawa.posts WHERE content LIKE '%diseño%'), (SELECT user_id FROM dawa.users WHERE username = 'johndoe'), '¡Impresionante trabajo, Alice!');

-- Insertar grupos
INSERT INTO dawa.groups (name, description, is_private) VALUES
('Estudiantes de Ingeniería de Software', 'Grupo para estudiantes de la carrera de Ingeniería de Software', FALSE),
('Administración de Empresas', 'Grupo para discutir temas de administración de empresas', FALSE),
('Diseño Gráfico', 'Grupo para compartir proyectos y recursos de diseño gráfico', FALSE);

-- Insertar miembros de grupo
INSERT INTO dawa.group_members (group_id, user_id) VALUES
((SELECT group_id FROM dawa.groups WHERE name = 'Estudiantes de Ingeniería de Software'), (SELECT user_id FROM dawa.users WHERE username = 'johndoe')),
((SELECT group_id FROM dawa.groups WHERE name = 'Administración de Empresas'), (SELECT user_id FROM dawa.users WHERE username = 'janedoe')),
((SELECT group_id FROM dawa.groups WHERE name = 'Diseño Gráfico'), (SELECT user_id FROM dawa.users WHERE username = 'alice'));

-- Insertar eventos
INSERT INTO dawa.events (user_id, title, description, event_date) VALUES
((SELECT user_id FROM dawa.users WHERE username = 'johndoe'), 'Charla sobre nuevas tecnologías', 'Una charla sobre las últimas tendencias en tecnología.', '2024-08-01 10:00:00'),
((SELECT user_id FROM dawa.users WHERE username = 'janedoe'), 'Taller de liderazgo', 'Taller para desarrollar habilidades de liderazgo.', '2024-08-05 14:00:00'),
((SELECT user_id FROM dawa.users WHERE username = 'alice'), 'Exposición de diseño gráfico', 'Muestra de los mejores proyectos de diseño gráfico de los estudiantes.', '2024-08-10 09:00:00');

-- Insertar participantes de eventos
INSERT INTO dawa.event_participants (event_id, user_id) VALUES
((SELECT event_id FROM dawa.events WHERE title = 'Charla sobre nuevas tecnologías'), (SELECT user_id FROM dawa.users WHERE username = 'janedoe')),
((SELECT event_id FROM dawa.events WHERE title = 'Taller de liderazgo'), (SELECT user_id FROM dawa.users WHERE username = 'alice')),
((SELECT event_id FROM dawa.events WHERE title = 'Exposición de diseño gráfico'), (SELECT user_id FROM dawa.users WHERE username = 'johndoe'));

-- Insertar mensajes
INSERT INTO dawa.messages (sender_id, receiver_id, content) VALUES
((SELECT user_id FROM dawa.users WHERE username = 'johndoe'), (SELECT user_id FROM dawa.users WHERE username = 'janedoe'), 'Hola Jane, ¿cómo estás?'),
((SELECT user_id FROM dawa.users WHERE username = 'janedoe'), (SELECT user_id FROM dawa.users WHERE username = 'alice'), 'Hola Alice, ¿puedes ayudarme con un proyecto?'),
((SELECT user_id FROM dawa.users WHERE username = 'alice'), (SELECT user_id FROM dawa.users WHERE username = 'johndoe'), 'Hola John, ¡claro que sí! ¿Qué necesitas?');

-- Insertar notificaciones
INSERT INTO dawa.notifications (user_id, content) VALUES
((SELECT user_id FROM dawa.users WHERE username = 'johndoe'), 'Tienes una nueva solicitud de amistad.'),
((SELECT user_id FROM dawa.users WHERE username = 'janedoe'), 'Tu evento "Taller de liderazgo" ha sido aprobado.'),
((SELECT user_id FROM dawa.users WHERE username = 'alice'), 'Tu publicación ha recibido un nuevo comentario.');