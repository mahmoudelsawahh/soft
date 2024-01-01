import fetch from "isomorphic-unfetch";
import UserAgent from "user-agents";
import stream, { Stream } from 'stream'


const BASE_URL = "https://delta.deltawy.com/imagess";

export default async function images(req, res) {
  const imageId = req.query.id;
  console.log(imageId)

  if (!imageId) {
    res
      .status(400)
      .send({ message: "Image url not provided or has wrong format" });
  }

  const imageBlob = await fetchImageBlob(`${BASE_URL}?id=${imageId}`);
  pipeImage(res, imageBlob);
}

function pipeImage(res, imageBlob) {
  const passThrough = new Stream.PassThrough();

  stream.pipeline(imageBlob, passThrough, (err) => {
    if (err) {
      console.log(err);
      handleFallback(res);
      return;
    }
  });
  passThrough.pipe(res);
}

function handleFallback(res) {
  res.status(422).send({ message: "Couldn't fetch the image" });
}

async function fetchImageBlob(url) {
  return await fetch(url, {
    headers: { "user-agent": new UserAgent().toString() },
  }).then((data) => data.body);
}