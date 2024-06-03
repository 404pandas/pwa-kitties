import { deleteDb } from "./database";

export const setupDeleteButton = (editor) => {
  const butDelete = document.getElementById("buttonDelete");

  // Click event handler on the `butDelete` element
  butDelete.addEventListener("click", async () => {
    console.log("delete button clicked!");
    localStorage.removeItem("content");
    await deleteDb();
    editor.setValue(`
      (")(") 
    ("),--.(")
     :"    ";      (")(") 
     \`.____,'    ("),--.(")
                  :"    ";
                  \`.____,' 

Your notes have been deleted!
Those pesky kitties! 🐱🐾
     `);
  });
};
