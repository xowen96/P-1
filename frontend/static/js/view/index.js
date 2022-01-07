
const router = async () => {
  const routes =[
    {path: "/",view: () => console.log("Viewing Dashboard")},
    {path: "/menu",veiw: ()=> console.log("Viewing Posts")},
    {path: "/login", view: () => console.log("Viewing login")}

  ];
};