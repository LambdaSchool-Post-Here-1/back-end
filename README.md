# back-end

API documentation: 

BASE URL: https://post-here-heroku.herokuapp.com

ENDPOINTS:  
I. GET /  
II. GET /api/reddit/  
III. POST /api/reddit/  
IV. POST /api/auth/register  
V. POST /api/auth/login  
VI. GET /api/auth/logout  


# I. GET /
 -- Confirms server is running, otherwised not much used


# II. GET /api/reddit/  

 -- returns array of post objects if logged in, otherwise returns message to log in

# III. POST /api/reddit/ 

 -- adds post to array. Requires following type of JSON object

```json
{
	"title":"Nothing Else Matters",
	"content":"So close, no matter how far...",
}
```

"author" property (foreign key reference) is set to logged in user, and id increments automatically. 



# IV. POST /api/auth/register 

 -- registers a new user and password. (Password hashed). Returns username and hashed password 

```json
Type of object required:
{
	"username":"freddie",
	"password":"mercury"
}
```


# V. POST /api/auth/login

 -- takes input as above. Logs user in- creates a cookie for sessions. I can set up as json web token if preferred.


# VI. GET /api/auth/logout

 -- logs out user.


# VII. GET /api/reddit/:id

 -- Gets post by id

# VIII. DELETE /api/reddit/:id

 -- Deletes post by id
