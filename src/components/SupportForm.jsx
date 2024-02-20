export default function SupportForm() {
  function search(formData) {
    
  }
  return (
    <form action={search}>
      <label htmlFor="name">Full Name</label>  
      <input name="name" type="text" id="name" />
      <label htmlFor="email">Email</label>
      <input name="email" type="email" id="email" />
      <label htmlFor="comment"> Comment</label>
      <textarea name="comment" rows="4" cols="50" id="comment"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
