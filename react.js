import * as React from "react";
import { builder, BuilderComponent } from '@builder.io/react'

builder.init('YOUR BUILDER.IO KEY')

export const getStaticProps = async (context) => {
  // Dynamically fetch latest content from Builder.io API, so you can publish updates without
  // codebase changes
  const content = await builder.get('page', { url: context.resolvedUrl }).promise();
  return { props: { content } }
}

// View full integration options and docs here: https://builder.io/c/docs/developers
export default function MyCompoennt(props) {
  return <BuilderComponent
    content={props.content}
    model="page" />
}
export default function MyComponent() {
  return (
    <>
      <div className="div">
        <picture>
          <source
            srcset="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1c9a26544124d53b7843d8be8f08940?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1c9a26544124d53b7843d8be8f08940?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1c9a26544124d53b7843d8be8f08940?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1c9a26544124d53b7843d8be8f08940?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1c9a26544124d53b7843d8be8f08940?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1c9a26544124d53b7843d8be8f08940?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1c9a26544124d53b7843d8be8f08940?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1c9a26544124d53b7843d8be8f08940"
            type="image/webp"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1c9a26544124d53b7843d8be8f08940"
            srcset="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1c9a26544124d53b7843d8be8f08940?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1c9a26544124d53b7843d8be8f08940?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1c9a26544124d53b7843d8be8f08940?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1c9a26544124d53b7843d8be8f08940?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1c9a26544124d53b7843d8be8f08940?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1c9a26544124d53b7843d8be8f08940?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1c9a26544124d53b7843d8be8f08940?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ff1c9a26544124d53b7843d8be8f08940"
            className="image"
          />
        </picture>
        <div className="builder-image-sizer image-sizer" />
      </div>
      <style jsx>{`
        .div {
          display: flex;
          position: relative;
          min-width: 20px;
          min-height: 20px;
          max-width: 1184px;
        }
        .image {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer {
          width: 100%;
          padding-top: 42.22972972972973%;
          pointer-events: none;
          font-size: 0;
        }
      `}</style>
    </>
  );
}