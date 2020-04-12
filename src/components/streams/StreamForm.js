import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderErr(meta) {
    if (meta.touched) {
      return <div className="invalid-feedback">{meta.error}</div>;
    }
  }
  renderInput = ({ input, meta, label }) => {
    const classname =
      meta.touched && meta.error ? "form-control is-invalid" : "form-control";
    return (
      <div className="form-group">
        <label>{label}</label>
        <input className={classname} {...input} />
        {this.renderErr(meta)}
      </div>
    );
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Description"
        />
        <button className="btn btn-primary">{this.props.btnTxt}</button>
      </form>
    );
  }
}

const validate = (formObj) => {
  const errors = {};
  if (!(formObj.title && formObj.title.length >= 3)) {
    errors.title = "Title must be at least 3 characters";
  }
  if (!(formObj.description && formObj.description.length >= 10)) {
    errors.description = "Description must be at least 10 characters";
  }
  return errors;
};

const wrappedForm = reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);

export default wrappedForm;
