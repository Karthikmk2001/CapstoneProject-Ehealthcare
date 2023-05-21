use [E-HealthcareDB];
select * from Users;

select * from Medicines;
select * from Categories;

create procedure[dbo].[GetUserList]
as
begin
select * from dbo.Users
end
go

exec [dbo].[GetUserList]

create procedure[dbo].[GetUserById]
@UserId int
as
begin
select * from dbo.Users
where UserId=@UserId
end 
go
exec [dbo].[GetUserById] 1

create procedure [dbo].[AddUser]
@Fullname varchar(max),
@Username varchar(max),
@Email varchar(max),
@Role varchar(max),
@Password varchar(max)
as
begin
insert into [dbo].[Users](Fullname,Username,Email,Role,Password)
values(@Fullname,@Username,@Email,@Role,@Password)
end 
go

exec [dbo].[AddUser] 'dmk','dmk','d@gmail.com','admin','123456'

create procedure[dbo].[GetMedicineList]
as
begin
select * from dbo.Medicines
end
go
exec [dbo].[GetMedicineList]

create procedure[dbo].[GetMedicineById]
@MedicineId int
as
begin
select * from dbo.Medicines
where MedicineId=@MedicineId
end 
go
exec [dbo].[GetMedicineById] 1

create procedure [dbo].[AddMedicine]
@MedicineName varchar(max),
@Price int,
@AvailableQuantity int,
@Image varchar(max),
@CategoryId int,
@MedicineAddedDate Date
as
begin
insert into [dbo].[Medicines](MedicineName,Price,AvailableQuantity,Image,CategoryId,MedicineAddedDate)
values(@MedicineName,@Price,@AvailableQuantity,@Image,@CategoryId,@MedicineAddedDate)
end 
go

create procedure [dbo].[UpdateMedicineById]
@MedicineId int,
@MedicineName varchar(max),
@Price int,
@AvailableQuantity int,
@Image varchar(max),
@CategoryId int,
@MedicineAddedDate date
as
begin
    update Medicines
    set MedicineName = @MedicineName , Price = @Price, AvailableQuantity=@AvailableQuantity, Image=@Image, CategoryId=@CategoryId, 
    MedicineAddedDate=@MedicineAddedDate   
    where MedicineId = @MedicineId
end
go

create procedure DeleteMedicineById
@MedicineId int
as
begin
    delete from Medicines
    where MedicineId = @MedicineId
end
go

create procedure[dbo].[GetCategoryList]
as
begin
select * from dbo.Categories
end
go
exec [dbo].[GetCategoryList]

create procedure[dbo].[GetCategoryById]
@CategoryId int
as
begin
select * from dbo.Categories
where CategoryId=@CategoryId
end 
go
exec [dbo].[GetCategoryById] 2

create procedure [dbo].[AddCategory]
@CategoryName varchar(max),
@CategoryDescription varchar(max),
@CategoryAddedDate Date
as
begin
insert into [dbo].[Categories](CategoryName,CategoryDescription,CategoryAddedDate)
values(@CategoryName,@CategoryDescription,@CategoryAddedDate)
end 
go

create procedure [dbo].[UpdateCategoryById]
@CategoryId int,
@CategoryName varchar(max),
@CategoryDescription varchar(max),
@CategoryAddedDate date
as
begin
    update Categories
    set CategoryName = @CategoryName , CategoryDescription=@CategoryDescription, 
    CategoryAddedDate=@CategoryAddedDate   
    where CategoryId = @CategoryId
end
go

create procedure DeleteCategoryById
@CategoryId int
as
begin
    delete from Categories
    where CategoryId = @CategoryId
end
go

create procedure [dbo].[AddOrder]
@UserId int,
@MedicineId int,
@OrderDate date
as
begin
insert into [dbo].[Orders](UserId,MedicineId,OrderDate)
values(@UserId,@MedicineId,@OrderDate)
end 
go