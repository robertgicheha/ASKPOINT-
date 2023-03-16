CREATE PROCEDURE sp_update_profile_info
  @UserId VARCHAR(255),
  @Display_name VARCHAR(255),
  @Location VARCHAR(255),
  @About TEXT
 
AS
BEGIN
 UPDATE profile_info
        SET 
        display_name = COALESCE(@Display_name, display_name),
        location = COALESCE(@Location, location),
        about = COALESCE(@About, about)
        
        WHERE user_id= @UserId;

END

