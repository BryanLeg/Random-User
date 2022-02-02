const getData = ({
    name,
    email,
    dob,
    location,
    phone,
    login,
    picture
}) => {
    const fullName = `${name.first} ${name.last}`;
    const age = dob.age;
    const adress = `${location.street.number} ${location.street.name}`;
    const password = login.password;
    const image = picture.large;
    return {
        fullName,
        email,
        age,
        adress,
        phone,
        password,
        image
    }
};

export default getData;