import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'; 

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";


function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit
  const isEditSession = Boolean(editId)

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  })
  const { errors } = formState
  console.log(errors)

  const { isCreating,  createCabin } = useCreateCabin
  const { isEditing, editCabin } = useEditCabin
  const isWorking = isCreating || isEditing

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0]
    if (isEditSession) editCabin({ newCabinData: { ...data, image }, id: editId })
    else createCabin({ ...data, image: image },
      {
        onSuccess: (data) => {
          console.log(data)
          reset()         
        }
      })
  }

  function onError(errors) {
    console.log(errors)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register('name', {
          required: 'This field is required'
        })} />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input type="number" id="maxCapacity" {...register('maxCapacity', {
          required: 'This field is required',
          min: {
            value: 1,
            capacity: "Capacity should be atleast 1"
          }
        })}/>
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input type="number" id="regularPrice" disabled={isCreating} {...register('regularPrice', {
          required: 'This field is required',
          validate: (value) => value <= getValues().regularPrice || 'Discount should be less than regular price'
        })}/>
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input type="number" id="discount" disabled={isCreating} defaultValue={0} {...register('discount', {
          required: 'This field is required'
        })}/>
      </FormRow>

      <FormRow label="Description for website" error={errors?.description?.message}>
        <Textarea type="number" id="description" disabled={isCreating} defaultValue="" {...register('description', {
          required: 'This field is required'
        })}/>
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          disabled={isCreating}
          accept="image/*"
          type="file"
          {...register('image', {
          required: isEditSession ? false : 'This field is required'
        })}/>
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? 'Edit cabin' : 'Create new cabin'}</Button>
      </FormRow>
    </Form>
  );
}

CreateCabinForm.propTypes = {
    editId: PropTypes.string.isRequired,
    cabinToEdit: PropTypes.object.isRequired,
};

export default CreateCabinForm;