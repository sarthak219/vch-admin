# Admin system for Immunizers

## 💡 Inspiration 💡
VCH Vaccination Form Prototype for ThinkTech Case Competition ~ Thousands of VCH employees are vaccinated every year and BC Ministry of Health mandates that VCH keeps track of their employee's vaccination status

## ⚙️ What it does ⚙️

VCH employees can fill in an online form when at the vaccination centre and easily opt in to provide VCH with their vaccination data

There is a user facing form to input data and a nurse facing form to input more data and ensure fields are entered correctly.

## 🛠️ How we built it 🛠️

For the frontend, we used ReactJS to create a visual and accessible way for users to input data.

To store user data, we took advantage of Firebase and used Axios to fetch and save any data to and from firebase. We also used react-router-dom to handle routing inside of React(JS).

Check out our user form app demo [here](https://sarthak219.github.io/vch-consent-form/), our user form repo [here](https://github.com/sarthak219/vch-consent-form) and our nurse form app [here](https://sarthak219.github.io/vch-admin/)!


### User Form

![](https://cdn.discordapp.com/attachments/596478199924523018/1045219979995389962/ezgif.com-gif-maker_2.gif)

#

### Nurse Form

![](https://cdn.discordapp.com/attachments/596478199924523018/1045220347374485534/good_admin.gif)
![](https://cdn.discordapp.com/attachments/596478199924523018/1045220346544005130/good_admin_check.gif)


## 😣 Challenges we ran into 😣

We were plagued with challenges

Some Challenges include:

- Organizing schedules
- Figuring out Firebase's Cloud Firestore 
- Getting multiple reactJS pages to work together seamlessly

## ⏭️ What's next for Consult-Aid ⏭️

- RPA implementation to move data into VCH's internal database and ImmunesBC's database
- JWT tokenization and encryption to ensure a high level of security because we're dealing with patient/sensitive employee data
- Add VCH employee authentication to prevent random people from inserting data
- Migrate VCH's current database to ours
- Private hosting on VCH servers

## 🔨 Built With 🔨

- reactJS
- html
- css
- firebase
