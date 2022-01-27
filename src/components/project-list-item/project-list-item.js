import React, { useEffect, useRef } from 'react';
import { navigate } from 'gatsby';
import * as styles from './project-list-item.module.css'

export const ProjectListItem = (props) => {
    const { project, index } = props;	
    
    const mapIndex = (index) => {
      let _index = index + 1;
      return _index < 10 ? `0${_index}/`: `${_index}/`;
    }

    const clickLink = (node) => {
      navigate(`/project/${project.slug}/`)
    }

    const itemRef = useRef();
    useEffect(() => {
        itemRef.current.style.cursor = `url(${project.toolsUsed[0].fluid.srcWebp}), auto`;
    },[]);
    
    const onHover = _ => {
      props.showProjectImage(project.projectImages[0].file.url)
    }

    const onHoverOut = _  => {
      props.hideProjectImage();
    }
    
	return(
          <li className={styles.listItem} 
	          onClick={clickLink}
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