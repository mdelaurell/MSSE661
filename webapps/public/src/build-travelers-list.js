/**
 * @class travelerList
 *
 * Creates a list of travelers and updates a list
 */

class travelerList {
    travelers = [];
  
    constructor() {}
  
    /**
     * Build traveler list parent.
     * Uses bootstrap classes with some custom overrides.
     */
    createtravelerListParent = () => {
      const ul = document.createElement('ul');
      ul.id = 'travelers-list';
      ul.className = 'list-group list-group-flush checked-list-box';
      return ul;
    };
  
    _deleteEventHandler = (travelerId) => async () => {
      if (travelerId) {
        const res = await deletetraveler(travelerId);
  
        if (res !== null) {
          this.travelers = this.travelers.filter((traveler) => traveler.traveler_id !== travelerId);
          const traveler = document.getElementById(`traveler-${travelerId}`);
          traveler.remove();
  
          if (!this.travelers.length) {
            const div = document.getElementById('travelers');
            const loadingDiv = div.childNodes[1];
            const errDiv = this.generateErrorMsg('Create some new travelers!');
            div.replaceChild(errDiv, loadingDiv);
          }
        }
      }
    };
  
    /**
     * Builds the list item.
     * Uses bootstrap classes with some custom overrides.
     *
     * {@link https://getbootstrap.com/docs/4.4/components/list-group/}
     * @example
     * <li class="list-group-item">
     *   <button class="btn btn-secondary" onclick="deletetraveler(e, index)">X</button>
     *   <span>traveler name</span>
     *   <span>pending</span>
     *   <span>date create</span>
     * </li>
     */
    buildtravelerListRowItem = (traveler) => {
      const listGroupItem = document.createElement('li');
      listGroupItem.id = `traveler-${traveler.traveler_id}`; // traveler-1
      listGroupItem.className = 'list-group-item';
  
      const deleteBtn = document.createElement('button');
      const deleteBtnTxt = document.createTextNode('X');
      deleteBtn.className = 'btn btn-secondary';
      deleteBtn.addEventListener('click', this._deleteEventHandler(traveler.traveler_id));
      deleteBtn.appendChild(deleteBtnTxt);
  
      const travelerFirstNameSpan = document.createElement('span');
      const travelerFirstName = document.createTextNode(traveler.traveler_first_name);
      travelerNameSpan.appendChild(travelerName);
    
      const travelerLastNameSpan = document.createElement('span');
      const travelerLastName = document.createTextNode(traveler.traveler_last_name);
      travelerLastNameSpan.appendChild(travelerLastName);
  
      const travelerEmailSpan = document.createElement('span');
      const travelerEmailAddress = document.createTextNode(traveler.traveler_email_address);
      travelerEmailSpan.appendChild(travelerEmailAddress);
  
      const travelerStatusSpan = document.createElement('span');
      const travelerStatus = document.createTextNode(traveler.status);
      travelerStatusSpan.append(travelerStatus);
  
      const travelerDateSpan = document.createElement('span');
      const travelerDate = document.createTextNode(traveler.created_date);
      travelerDateSpan.append(travelerDate);
  
      // add list item's details
      listGroupItem.append(deleteBtn);
      listGroupItem.append(travelerNameSpan);
      listGroupItem.append(travelerStatusSpan);
      listGroupItem.append(travelerDateSpan);
  
      return listGroupItem;
    };
  
    /**
     * Assembles the list items then mounts them to a parent node.
     * Uses bootstrap classes with some custom overrides.
     */
    buildtravelersList = (mount, travelers) =>
      travelers.map((traveler) => {
        const listGroupRowItem = this.buildtravelerListRowItem(traveler);
  
        // add entire list item
        mount.append(listGroupRowItem);
      });
  
    generateErrorMsg = (msg) => {
      const div = document.createElement('div');
      const text = document.createTextNode(msg);
      div.id = 'user-message';
      div.className = 'center';
      div.appendChild(text);
      return div;
    };
  
    generateTravelers = async () => {
      const res = await getTravelers();
      const div = document.getElementById('travelers');
      const loadingDiv = div.childNodes[1];
  
      if (res.length) {
        this.travelers = res;
        const travelersDiv = this.createtravelerListParent();
        this.buildtravelersList(travelersDiv, res);
        div.replaceChild(travelersDiv, loadingDiv);
      } else {
        const errDiv = this.generateErrorMsg(res.msg);
        div.replaceChild(errDiv, loadingDiv);
      }
    };
  }
  
  const inst = new travelerList();
  
  (async () => {
    inst.generateTravelers();
  })();
  