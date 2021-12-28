import React, { useEffect, useRef } from 'react';
import * as styles from './project-list-item.module.css'

export const ProjectListItem = (props) => {
    const { project, index } = props;	
    
    const mapIndex = (index) => {
      let _index = index + 1;
      return _index < 10 ? `0${_index}/`: `${_index}/`;
    }

    const clickLink = (node) => {
      console.log('click link', node);
    }

    const itemRef = useRef();
    useEffect(() => {
        itemRef.current.style.cursor = `url(${project.toolsUsed[0].fluid.src}), auto`;
    },[]);
    
    const onHover = _ => {
      props.showProjectImage(project.projectImages[0].file.url)
      // return project.projectImages[0].file.url
    }

    const onHoverOut = _  => {
      props.hideProjectImage();
    }
    
	return(
          <li className={styles.listItem} 
	          onClick={() => clickLink(project)}
	          onMouseEnter={onHover}
	          onMouseLeave={ onHoverOut}
            ref= {itemRef}
	          >
          
            <div className={styles.textWrapper}>
            	<span> { mapIndex(index)} </span>
            	{project.projectTitle}
            </div>

            <span className={styles.hoverBlock}></span>
          </li>
	)
}

export default ProjectListItem;