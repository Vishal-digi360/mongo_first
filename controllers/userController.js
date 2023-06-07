import User from "../mongodb/models/user.js";

const getAllUser = async (req, res) => {
  const users = await User.find();
  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  try {
    const { name, email, avatar } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(200)
        .json({ message: "User Already Exists!!", user: userExist });
    }

    const newUser = await User.create({
      name,
      email,
      avatar,
    });

    res.status(200).json({ message: "User Created!!", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserByID = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById({ _id: id });

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "User Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUserByID = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById({ _id: id });

    if (user) {
      await User.findByIdAndDelete({ _id: id });

      return res.status(200).json({ message: "User Deleted" });
    } else {
      return res.status(404).json({ message: "User Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById({ _id: id });
    const { name, email, avatar } = req.body;


    if (user) {
      await User.findByIdAndUpdate({ _id: id }, { name, email, avatar });

      return res.status(200).json({ message: "User Updated" });
    } else {
      return res.status(404).json({ message: "User Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const updateUserEmail = async (req, res) => {
    try {
      const { id } = req.params;
  
      const user = await User.findById({ _id: id });
      const { email } = req.body;
  
  
      if (user) {
        await User.findByIdAndUpdate({ _id: id }, {  email });
  
        return res.status(200).json({ message: "User email Updated" });
      } else {
        return res.status(404).json({ message: "User Not Found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export { getAllUser, createUser, getUserByID, deleteUserByID, updateUser,updateUserEmail };
