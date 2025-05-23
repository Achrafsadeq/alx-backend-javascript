import { uploadPhoto, createUser } from './utils';

/* This function uploads a photo and creates a user asynchronously. */
export default async function asyncUploadUser() {
  try {
    const uploadedPhoto = await uploadPhoto();
    const createdUser = await createUser();

    return { photo: uploadedPhoto, user: createdUser };
  } catch (error) {
    return { photo: null, user: null };
  }
}
