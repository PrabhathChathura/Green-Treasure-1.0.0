import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import { db, storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const docRef = await collection(db, "products");
      const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`);
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

      uploadTask.on(
        "state_changed",
        null,
        () => {
          toast.error("Image upload failed!");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              productName: enterTitle,
              shortDesc: enterShortDesc,
              description: enterDescription,
              category: enterCategory,
              price: enterPrice,
              imgUrl: downloadURL,
            });
          });
        }
      );

      setLoading(false);
      toast.success("Product Added Successfully!");
      navigate("/dashboard/all-products");
    } catch (err) {
      setLoading(false);
      toast.error("Failed to add product!");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <h4 className="py-5 text-center">Loading.....</h4>
            ) : (
              <>
                <h4 className="mb-5">Add Product</h4>
                <Form onSubmit={addProduct}>
                  <FormGroup style={{ marginBottom: "1rem" }}>
                    <span style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Product Title</span>
                    <input
                      type="text"
                      placeholder="Enter Product Title"
                      value={enterTitle}
                      onChange={(e) => setEnterTitle(e.target.value)}
                      required
                      style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
                    />
                  </FormGroup>

                  <FormGroup style={{ marginBottom: "1rem" }}>
                    <span style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Short Description</span>
                    <input
                      type="text"
                      placeholder="Product Short Brief"
                      value={enterShortDesc}
                      onChange={(e) => setEnterShortDesc(e.target.value)}
                      required
                      style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
                    />
                  </FormGroup>

                  <FormGroup style={{ marginBottom: "1rem" }}>
                    <span style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Description</span>
                    <input
                      type="text"
                      placeholder="Product Description"
                      value={enterDescription}
                      onChange={(e) => setEnterDescription(e.target.value)}
                      required
                      style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
                    />
                  </FormGroup>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
                    <FormGroup style={{ marginBottom: "1rem", width: "50%" }}>
                      <span style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Price</span>
                      <input
                        type="number"
                        placeholder="Rs5999"
                        value={enterPrice}
                        onChange={(e) => setEnterPrice(e.target.value)}
                        required
                        style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
                      />
                    </FormGroup>

                    <FormGroup style={{ marginBottom: "1rem", width: "50%" }}>
                      <span style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Category</span>
                      <select
                        className="w-100 p-2"
                        value={enterCategory}
                        onChange={(e) => setEnterCategory(e.target.value)}
                        required
                        style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
                      >
                        <option value="">Select category</option>
                        <option value="plastic">Plastic</option>
                        <option value="ewaste">E-waste</option>
                        <option value="rubber">Rubber</option>
                        <option value="metal">Metal</option>
                        <option value="paper">Paper</option>
                      </select>
                    </FormGroup>
                  </div>

                  <FormGroup style={{ marginBottom: "1rem" }}>
                    <span style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Product Image</span>
                    <input
                      type="file"
                      onChange={(e) => setEnterProductImg(e.target.files[0])}
                      required
                      style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
                    />
                  </FormGroup>

                  <button
                    className="buy__btn"
                    type="submit"
                    style={{
                      background: "#000",
                      color: "#fff",
                      padding: "0.75rem 1.5rem",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginTop: "1rem",
                    }}
                  >
                    Add Product
                  </button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
