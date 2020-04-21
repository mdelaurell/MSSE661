const doAddTraveler = async (e) => {
    e.preventDefault();
  
    const travelerFirstName = document.getElementById('HomeInputFirstName');
    const travelerLastName = document.getElementById('HomeInputLastName');
    const travelerEmailAddress = document.getElementById('HomeInputEmailAddress');
    const statusSelect = document.getElementById('HomeSelectStatus');
    
    const travelers_first_name = travelerFirstName.value;
    const travelers_last_name = travelerLastName.value;
    const traveler_email_address = travelerEmailAddress.value;
    const options = statusSelect.options;
    const selectedIndex = statusSelect.selectedIndex;
    const status = options[selectedIndex].text;
  
    if (!travelers_first_name) {
      alert('Please enter a traveler first name.');
      return;
    }
    if (!travelers_last_name) {
      alert('Please enter a traveler last name.');
      return;
    }
    if (!traveler_email_address) {
      alert('Please enter a traveler email address.');
      return;
    }
    if (selectedIndex == 0) {
      alert('Please select the traveler\'s status.');
      return;
    }
  
    const res = await addTraveler({ travelers_first_name,travelers_last_name,traveler_email_address, status });
  
    if (res !== null) {
      inst.generateTravelers();
    }
    travelerInput.value = '';
  };