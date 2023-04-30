CREATE TABLE IF NOT EXISTS transactions (
  id SERIAL PRIMARY KEY,
  topic VARCHAR(255),
  num_questions INTEGER,
  difficulty VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);
