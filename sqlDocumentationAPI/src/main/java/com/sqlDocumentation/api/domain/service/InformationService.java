package com.sqlDocumentation.api.domain.service;

import com.sqlDocumentation.api.domain.model.Information;
import com.sqlDocumentation.api.persistence.repository.InfoObjtsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InformationService {
    @Autowired
    private InfoObjtsRepository infoObjtsRepository;

    public List<Information> getAllClausesInformation(){
        return infoObjtsRepository.getAllClausesInformation();
    }

    public Information getClauses(String clause){
        return infoObjtsRepository.getClause(clause);
    }

    public List<String> getAllClauses(){
        return infoObjtsRepository.getAllClauses();
    }

    public boolean saveClause(Information information){
        return infoObjtsRepository.saveNewClause(information);
    }
}
