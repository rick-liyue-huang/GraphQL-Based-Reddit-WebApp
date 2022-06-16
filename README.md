

`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest` to create the project

`npm install @heroicons/react` to config the icons in this project
here I will create the header component using icons from 'heroicons/react', and notice to setting the icon class in 'globals.css' file.

`npm install --save next-auth` to install the next-auth to connect with reddit account

and config the next-auth providers in 'api/auth/xxx.js', in which the backend coding here.

'https://www.reddit.com/dev/api' to login and 'https://www.reddit.com/prefs/apps' to create the reddit relative app and get the variables in '.env.local' file. and need to remember redireact uri: 'http://localhost:3000/api/auth/callback/reddit'




create project in 'https://app.supabase.com' to creat the Postgres Database used to connect with the webapp.

'Supabase' is the alternative for 'firebase'.

here I will crete four tables: 
1. Post: ID, title, body, subreddit_id, image, username
2. Comment: ID, text, username, post_id
3. SubReddit: ID, topic
4. Vote: ID, username, post_id, upvote


deal with the stepzen
1. `npm install -g stepzen` to install it in project,
2. login followed by the instruments, `stepzen login`, all info can get from the login page,
3. create 'stepzen-config', and `cd stepzen-config`, run `stepzen init` to create 'stepzen' endpoint
and login followed by the instruments, `stepzen login`,
4. run `stepzen import postgresql` to connect supabase 'Connection info' with stepzen,
5. run `stepzen start` to deploy the endpoint to stepzen website and provide one graphql control webpage,
6. in development stage, have to open two terminals, run `stepzen start` under 'stepzen-config' and `npm run dev` under root.

GraphQL solves the problems of over-fetching and under-fetching.

The project using GraphQL from stepzen, so It will been wrapped in GraphQL client provider.
I will create file named 'apollo-client.js' to set apolloClient configuration.



create avatar in 'https://avatars.dicebear.com'

the form will use 'react-hook-form' library


using `npm install react-hot-toast` to display the toaster after 


'@heroicons/react' used to add icons


tailwind notice: lg: xl: to modify the style by different screen size.


the default xxx.graphql files need to add additional funcs to match the application








