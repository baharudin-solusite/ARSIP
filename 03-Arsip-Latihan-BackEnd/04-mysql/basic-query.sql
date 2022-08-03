show DATABASES;

create database movie;

use movie;

show tables;

create table movie (
	id int auto_increment PRIMARY KEY,
	title VARCHAR(50),
	overview TEXT,
	realese int
);

drop table movie;

insert into movie 
(title, overview, realese) values
("minion", "perjalan gru", 2022),
("fasfa", "sadas", 2022);

select id, title, overview from movie;

update movie 
set overview = "spiderman bertemu dengan spiderman yg lain" 
where id = 1;

delete from movie where id = 3;