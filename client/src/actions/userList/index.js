import { USER_LOCATION_LIST_URL } from '../../constants/api';
import { userLocationListStore } from '../../stores/';

export const updateUserList = () => {
  fetch(USER_LOCATION_LIST_URL)
    .then(response => response.json())
    .then((data) => {
      userLocationListStore.setLocationList(data);
    });
};

export const saveUser = (user) => {
  userLocationListStore.addUser(user);
};
