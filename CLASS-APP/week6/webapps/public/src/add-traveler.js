/**
 * AJAX add new traveler to traveler list on save.
 */
const doAddTraveler = async (e) => {
    e.preventDefault();
  
    const travelerFirstName = document.getElementById('formInputFirstName');
    const travelerLastName = document.getElementById('formInputLastName');
    const travelerEmailAddress = document.getElementById('formInputEmailAddress');
    const statusSelect = document.getElementById('formSelectStatus');
    
    const travelers_first_name = travelerFirstName.value;
    const travelers_last_name = travelerLastName.value;
    const traveler_email_address = travelerEmailAddress.value;
    const options = statusSelect.options;
    const selectedIndex = statusSelect.selectedIndex;
    const status = options[selectedIndex].text;
  
    if (!travelers_first_name) {
      alert('Please enter a traveler name.');
      return;
    }
    if (!travelers_last_name) {
      alert('Please enter a traveler name.');
      return;
    }
    if (!traveler_email_address) {
      alert('Please enter a traveler name.');
      return;
    }
  
    const res = await addtraveler({ travelers_first_name,travelers_last_name,traveler_email_address, status });
  
    if (res !== null) {
      inst.generatetravelers();
    }
    travelerInput.value = '';
  };