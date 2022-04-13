class usersServices {

  constructor(){
   this.users = [
      {
        id: 1,
        name: 'joan'
      },
      {
        id: 2,
        name: 'Leandro'
      }
    ]
  }

  find(){
    return this.users;
  }


}

module.exports = usersServices
