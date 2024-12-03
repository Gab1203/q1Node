create database if not exists agendaDb;
use agendaDb;


create table contatos(
id int auto_increment primary key,
nome varchar(150) not null, 
email varchar(150) not null,
telefone varchar(13) not null
);


select * from contatos;
