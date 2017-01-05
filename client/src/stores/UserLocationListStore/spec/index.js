import { UserLocationListStore } from "../"

describe("UserLocationListStore", () => {
  it("adds new location", () => {
    const store = new UserLocationListStore();
    
    const newUser = {
      key: '1234',
      name: 'Some User',
      position: {
        lat: parseFloat('51.815606'),
        lng: parseFloat('-0.808400')
      },
      location: 'Aylesbury',
      defaultAnimation: '2',
      zoom: '1'
    };

    store.addUser(newUser);

    expect(store.locationList.length).toBe(1);
    expect(store.locationList[0].key).toBe('1234');
    expect(store.locationList[0].name).toBe('Some User');
    expect(store.locationList[0].position.lat).toBe('51.815606');
    expect(store.locationList[0].position.lng).toBe('-0.808400');
    expect(store.locationList[0].location).toBe('Aylesbury');
    expect(store.locationList[0].defaultAnimation).toBe('2');
    expect(store.locationList[0].zoom).toBe('1');
  })
});