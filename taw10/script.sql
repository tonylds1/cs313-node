create table if not exists taw10.person(
  id serial primary key,
  first_name varchar(32) not null,
  last_name varchar(32),
  birth date,
  mother int references taw10.person (id),
  father int references taw10.person (id)
);

insert into taw10.person values
(default, 'Tony', 'Moraes', '1982-08-16'),
(default, 'Neline', 'Moraes', '1990-04-30'),
(default, 'Benjamim', 'Moraes', '2013-04-08'),
(default, 'Charles', 'Moraes', '2015-07-20');

select * from taw10.person;

update taw10.person set father = 1, mother = 2 where id in (3, 4)