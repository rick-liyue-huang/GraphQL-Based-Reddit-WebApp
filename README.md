

`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest` to create the project

`npm install @heroicons/react` to config the icons in this project

`npm install --save next-auth` to install the next-auth to connect with reddit account

and config the next-auth providers in 'api/auth/xxx.js', in which the backend coding here.

'https://www.reddit.com/dev/api' to login and 'https://www.reddit.com/prefs/apps' to create the reddit relative app and get the variables in .env.local


create project in 'https://app.supabase.com' to creat the Postgres Database used to connect with the webapp.

'Supabase' is the alternative for 'firebase'.

here I will crete four tables: 
1.Post: ID, title, body, subreddit_id, image, username
2.Comment: ID, text, username, post_id
3. SubReddit: ID, topic
4. Vote: ID, username, post_id, upvote


deal with the stepzen
`npm install -g stepzen` to install it in project
and login followed by the instruments
and then create directory 'stepzen' and run `stepzen init` to create endpoint.

Because the project is based on Postgresql, so run `stepzen import postgresql` under 'stepzen' dir, and follow the rules matching the info in supabase project. 
and then `stepzen start`

notice: in the project development stage, needs to open three ports: 1. under main to run `npm run dev`, 2.under 'stepzen' to run `stepzen start` to open stepzen port, 3.used to install package


create avatar in 'https://avatars.dicebear.com'

the form will use 'react-hook-form' library


using `npm install react-hot-toast` to display the toaster after 





