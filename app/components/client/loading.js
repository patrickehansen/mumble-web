import react from 'react';

export default function loading (props) {
  return (
    <div class="loading-container" data-bind="css: { loaded: true }">
      <div class="loading-circle" data-bind="css: { loaded: true }" />
    </div>  
  )
}