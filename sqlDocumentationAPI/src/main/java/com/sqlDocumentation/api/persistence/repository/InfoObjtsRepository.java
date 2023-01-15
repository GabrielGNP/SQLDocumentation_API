package com.sqlDocumentation.api.persistence.repository;

import com.sqlDocumentation.api.domain.model.Information;
import com.sqlDocumentation.api.persistence.mappers.InfosMapper;
import com.sqlDocumentation.api.persistence.model.InfoObjct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class InfoObjtsRepository {

    @Autowired
    private InfoObjtsCrudRepository infoObjtsCrudRepository;
    @Autowired
    private InfosMapper mapper;

    public List<Information> getAllClausesInformation(){
        return mapper.toInformations((List<InfoObjct>) infoObjtsCrudRepository.findAll());
    }

    public Information getClause(String clause){
        return mapper.toInformation(infoObjtsCrudRepository.getClauseByNameClause(clause));
    }

    public List<String> getAllClauses(){
        return infoObjtsCrudRepository.getAllCLauses();
    }

    public boolean saveNewClause(Information information){
        try{
            infoObjtsCrudRepository.save(mapper.toInfoObjct(information));
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }
}
