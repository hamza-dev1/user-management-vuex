// Source of this data can be found in: https://jsonplaceholder.typicode.com/users

export class UsersService {
    static usersList = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "phone": "1-770-736-8031 x56442",
            "about": "Loremipsum dolor sit amet consectetur, adipisicing elit. Aliquid quam consectetur ipsum doloripsum dolor sit amet consectetur, adipisicing elit. Aliquid quam consectetur sit amet consectetur, adipisicing elit. Aliquid quam consectetur, ut sed cupiditate iusto!",
            "image": require("@/assets/images/img1.png")
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "phone": "010-692-6593 x09125",
            "about": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quam consectetur, ut sed cupiditateipsum dolor sit amet consectetur, adipisicing elit. Aliquid quam consectetur iusto!",
            "image": require("@/assets/images/img2.png")
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "phone": "1-463-123-4447",
            "about": "Lorem ipsum doloripsum dolor sit amet consectetur, adipisicing elit. Aliquid quam consectetur sit amet consectetur, adipisicing elit. Aliquid quam consectetur, ut sed cupiditate iusto!",
            "image": require("@/assets/images/img3.png")
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "phone": "493-170-9623 x156",
            "about": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quam consectetur, ut sed cuipsum dolor sit amet consectetur, adipisicing elit. Aliquid quam consecteturpiditate iusto!",
            "image": require("@/assets/images/img4.png")
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "phone": "(254)954-1289",
            "about": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid qipsum dolor sit amet consectetur, adipisicing elit. Aliquid quam consecteturuam consectetur, ut sed cupiditate iusto!",
            "image": require("@/assets/images/img5.png")
        },
        {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "phone": "1-477-935-8478 x6430",
            "about": "Lorem ipsum dolor sit amet consectetur, adipisicing eipsum dolor sit amet consectetur, adipisicing elit. Aliquid quam consecteturlit. Aliquid quam consectetur, ut sed cupiditate iusto!",
            "image": require("@/assets/images/img1.png")
        },
    ];
    static getAllUsers() {
        return this.usersList;
    }
}