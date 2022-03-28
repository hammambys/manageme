create table users(
id int primary key auto_increment,
 firstName varchar(15),
 lastName varchar(15),
 email varchar(45),
 pwd varchar(65),
 userRole varchar(8),
 isLocked boolean,
 enabled boolean
)