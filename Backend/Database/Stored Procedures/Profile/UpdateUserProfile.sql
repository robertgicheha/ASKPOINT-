USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_update_profile
  @profileId VARCHAR(255),
  @userId VARCHAR(255),
  @Display_name VARCHAR(255),
  @Location VARCHAR(255),
  @About TEXT
 
AS
BEGIN
       IF EXISTS (SELECT * FROM profile WHERE  profile_id =@profileId)
       
         UPDATE profile SET display_name = @Display_name, location = @Location, about = @About WHERE user_id= @userId;
        
        SELECT * FROM profile 
        WHERE profile_id = @profileId;

END
