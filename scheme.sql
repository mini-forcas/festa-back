CREATE TABLE Quizzes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    admin_id INT, 
    question TEXT, 
    correct_option_id INT, -- 正しい選択肢のID（OptionsテーブルのIDを参照）
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table
  Quizzes (
    id SERIAL primary key,
    admin_id int,
    question text,
    correct_option_id int,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
  );

CREATE TABLE Options (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quiz_id INT, -- QuizzesテーブルのIDを参照
    option_text TEXT, -- 選択肢のテキスト
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (quiz_id) REFERENCES Quizzes(id) -- 外部キー制約
);
