import studentModel from "../models/student.js";
class StudentController {
  static createDoc = async (req, res) => {
    try {
      const { name, age, fess } = req.body;
      const doc = studentModel({
        name,
        age,
        fess,
      });
      const result = await doc.save();
      console.log(result);
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };

  static getAllDoc = async (req, res) => {
    try {
      const result = await studentModel.find();
      // console.log(result);
      res.render("index", { data: result });
    } catch (error) {
      console.log(error);
    }
  };

  static editDoc = async (req, res) => {
    // console.log(req.params.id);
    try {
      const result = await studentModel.findById(req.params.id);
      res.render("edit", { data: result });
    } catch (error) {
      console.log(error);
    }
  };

  static updateDocById = async (req, res) => {
    try {
      const result = await studentModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };

  static deleteDocById = async (req, res) => {
    try {
      const result = await studentModel.findByIdAndDelete(req.params.id);
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };
}

export default StudentController;
