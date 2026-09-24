export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h5>Student Profile Form</h5>
      
      <label htmlFor="wd-first-name">First Name:</label>
      <input type="text" id="wd-first-name" defaultValue="Gautam" /> <br />
      
      <label htmlFor="wd-last-name">Last Name:</label>
      <input type="text" id="wd-last-name" defaultValue="M" /> <br />

      <label htmlFor="wd-username">Username:</label>
      <input type="text" id="wd-username" defaultValue="GautamM86" /> <br />

      <label htmlFor="wd-password">Password:</label>
      <input type="password" id="wd-password" defaultValue="securepassword123" /> <br />

      <label>Biography:</label><br/>
      <textarea id="wd-bio" cols={30} rows={5} defaultValue="Computer Science student with an interest in algorithm optimization, 2D matrix prefix sums in Python, and building modular functions." /> <br />

      <label>Favorite Language:</label><br />
      <input type="radio" name="radio-lang" id="wd-radio-python" defaultChecked />
      <label htmlFor="wd-radio-python">Python</label><br />
      <input type="radio" name="radio-lang" id="wd-radio-ts" />
      <label htmlFor="wd-radio-ts">TypeScript</label><br />

      <label>Interests:</label><br/>
      <input type="checkbox" name="check-interest" id="wd-chkbox-algo" defaultChecked />
      <label htmlFor="wd-chkbox-algo">Algorithms</label><br/>
      <input type="checkbox" name="check-interest" id="wd-chkbox-web" defaultChecked />
      <label htmlFor="wd-chkbox-web">Web Development</label><br/>
      
      <label htmlFor="wd-role">Primary Role:</label>
      <select id="wd-role" defaultValue="STUDENT">
        <option value="STUDENT">Student</option>
        <option value="DEVELOPER">Developer</option>
      </select> <br /><br />

      <button id="wd-save" type="button">Save</button>
      <button id="wd-cancel" type="button">Cancel</button>
    </form>
  );
}