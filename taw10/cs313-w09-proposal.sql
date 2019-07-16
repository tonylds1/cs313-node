create schema heroes;

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

CREATE TABLE heroes.power (
  id int PRIMARY KEY,
  ds_description varchar,
  min_rank int,
  max_rank int
);

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

SELECT person.first_name || ' ' || person.last_name as name,
       person.birth,
       father.first_name || ' ' || father.last_name as father,
       mother.first_name || ' ' || mother.last_name as mother
FROM taw10.person person
    left join taw10.person mother on mother.id = person.mother
        left join taw10.person father on father.id = person.father
