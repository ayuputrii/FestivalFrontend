export default function validateCreate(values) {
  let errors = {};

  // Admin
  if (!values.title) {
    errors.title = "Title is required";
  } else if (values.title !== values.title) {
    errors.title = "Title do not match";
  }
  if (!values.description) {
    errors.description = "Description is required";
  } else if (values.description !== values.description) {
    errors.description = "Description do not match";
  }
  if (!values.photographer) {
    errors.photographer = "Photographer is required";
  } else if (values.photographer !== values.photographer) {
    errors.photographer = "Photographer do not match";
  }
  if (!values.category) {
    errors.category = "Category is required";
  } else if (values.category !== values.category) {
    errors.category = "Category do not match";
  }
  if (!values.photo) {
    errors.photo = "Photo is required";
  } else if (values.photo !== values.photo) {
    errors.photo = "Photo do not match";
  }
  return errors;
}
