CREATE TABLE IF NOT EXISTS materials(
  material_id SERIAL PRIMARY KEY,
  material_name VARCHAR(255),
  material_link VARCHAR(255),
  material_description VARCHAR(255),
  material_date DATE,
  subject_id INTEGER,
  user_id INTEGER
)

CREATE TABLE IF NOT EXISTS subjects(
  subject_id SERIAL PRIMARY KEY,
  subject_name VARCHAR(255)
)

CREATE TABLE IF NOT EXISTS tasks(
  task_id SERIAL PRIMARY KEY,
  task_name VARCHAR(255),
  task_description VARCHAR(255),
  task_date DATE,
  task_date_end DATE,
  task_status VARCHAR(255),
  subject_id INTEGER
)


