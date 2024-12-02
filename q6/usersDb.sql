create database if not exists usersDb;
use usersDb;

create table tasks(
id int auto_increment primary key,
email varchar(150) not null,
descricao text not null
);


select * from tasks;

UPDATE tasks SET email = 'lucas@gmail', descricao = 'OI TUDO BEM' WHERE id = 1;