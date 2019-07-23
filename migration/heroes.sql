create schema heroes;
set schema 'heroes';

CREATE TABLE heroes.person (
  id varchar PRIMARY KEY,
  full_name varchar,
  email varchar UNIQUE,
  gender varchar,
  date_of_birth varchar,
  created_at varchar
);

CREATE TABLE heroes.user (
  id int PRIMARY KEY,
  login varchar UNIQUE,
  password varchar,
  person_id varchar,
  created_at varchar
);

CREATE TABLE heroes.hero (
  id int PRIMARY KEY,
  ds_name varchar,
  tx_history text
);

create sequence seq_hero;
alter table heroes.hero
alter column id set default nextval('seq_hero');

CREATE TABLE heroes.power (
  id serial PRIMARY KEY,
  ds_description varchar,
  min_rank int,
  max_rank int
);

create sequence seq_power;
alter table heroes.power
alter column id set default nextval('seq_power');


CREATE TABLE heroes.hero_power (
  hero_id int,
  power_id int
);

CREATE TABLE heroes.army (
  user_id int,
  hero_id int
);

ALTER TABLE heroes.user ADD FOREIGN KEY (person_id) REFERENCES heroes.person (id);

ALTER TABLE heroes.hero_power ADD FOREIGN KEY (hero_id) REFERENCES heroes.hero (id);

ALTER TABLE heroes.hero_power ADD FOREIGN KEY (power_id) REFERENCES heroes.power (id);

ALTER TABLE heroes.army ADD FOREIGN KEY (user_id) REFERENCES heroes.user (id);

ALTER TABLE heroes.army ADD FOREIGN KEY (hero_id) REFERENCES heroes.hero (id);

select * from heroes.hero;
insert into heroes.hero
values
(default, 'Batman', 'Rich guy who has lost parents for crime.'),
(default, 'Aquaman', 'King of seas'),
(default, 'Wander Woman', 'Goddess raised by amazons'),
(default, 'Flash', 'Guy that receives his power by an accident when was working.'),
(default, 'Superman', 'Alien broght to earth when was a baby. raised by farmers.');

select * from heroes.power;
insert into heroes.power
values
(default, 'fly'),
(default, 'shapeshifting'),
(default, 'speed'),
(default, 'strengh'),
(default, 'smart'),
(default, 'teletransportation'),
(default, 'Telepathy');

insert into heroes.hero_power
values
(1, 1),
(1, 2),
(2, 5),
(3, 7),
(4, 1),
(4, 2),
(5, 3);

-- list heroes with their powers
select h.ds_name, p.ds_description from heroes.hero h
join heroes.hero_power as hp on hp.hero_id = h.id
join heroes.power p on p.id = hp.power_id
order by 1;


select h.*
from heroes.hero h
    join heroes.hero_power as hp on hp.hero_id = h.id
    join heroes.power p on p.id = hp.power_id
where lower(p.ds_description) similar to '%(vision|speed|fly)%';;
